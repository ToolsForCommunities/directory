function filterByPrograms (list, programs) {
  let filtered = list

  console.log(list)
  console.log(programs)

  if (Array.isArray(programs) && programs.length !== 0) {
    // Filter by programs
    filtered = filtered.filter((person) => {
      if (!person.program) {
        return false
      }

      for (let i = 0; i < programs.length; i += 1) {
        if (person.program.includes(programs[i])) {
          return true
        }
      }

      return false
    })
  }

  return filtered
}

export default filterByPrograms
