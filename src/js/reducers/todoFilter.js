import defaultFilter from '../defaultFilter';

export default function todoFilter(state = defaultFilter, action = {type: 'ALL'}) {
  const optimizeFilter = state.map(item => {
    const filterData = {
      ...item,
      isSelected: item.type.toUpperCase() === action.type ? true : false
    }
    return filterData
  })
  return optimizeFilter
}
