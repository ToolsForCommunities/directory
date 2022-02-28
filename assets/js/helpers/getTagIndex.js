function getTagIndex (list, item) {
  for (let i = 0; i < list.length; i += 1) {
    if (item.name === list[i].name) {
      return i
    }
  }

  return -1
}

export default getTagIndex
