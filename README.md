# 常用的方法

1. 处理字典枚举类型
```
const handleEnum = (list: any[], labelKey = 'dictionaryName', valueKey = 'id') => {
  if (!list || list.length === 0) {
    return [];
  }
  return list.map((item) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
},

// 实例
handleEnum(data, 'jobName', 'jobId')
/*
  [
    { label: '形划部段身已' , value: '6311313222025109' },
    { label: '到这点包引克' , value: '168503524182190' },
  ]
*/

```

2. 数组处理成对象枚举
```
const handleArrayToEnum = (list: any, valueKey = 'value', labelKey = 'name') => {
  if (!list || list.length === 0) {
    return {};
  }
  let tmp: any = {};
  list.forEach((val: any) => {
    tmp[val[valueKey]] = val[labelKey];
  });
  return tmp;
}

handleArrayToEnum(data, 'jobId', 'jobName')

/*
  {
    "6311313222025109": "形划部段身已",
    "168503524182190": "到这点包引克"
  }
*/
```

3. 生成树结构
```
// 生成树
const toTree = (data: any, value = 'id', pid = 'pid', children = 'children') => {
  // 删除所有children,以防止多次调用
  data.forEach((item: any) => {
    delete item[children];
  });

  // 将数据存储为以id为 KEY 的 map 索引数据列
  const map: any = {};
  data.forEach((item: any) => {
    map[item[value]] = item;
  });

  const val: any = [];
  data.forEach((item: any) => {
    // 以当前遍历项的pid,去map对象中找到索引的id
    const parent = map[item[pid]];
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });
  return val;
},
```