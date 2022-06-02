// 处理字典类型枚举
const handleEnum = (list: any[], labelKey = 'dictionaryName', valueKey = 'id') => {
  if (!list || list.length === 0) {
    return [];
  }
  return list.map(item => ({
    label: item[labelKey],
    value: item[valueKey]
  }));
};
