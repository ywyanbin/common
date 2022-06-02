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

