export default function ({ route, from, query, redirect }) {
  // if (from.name.includes('search')) {
  //   return false
  // }

  if (from && from.name.includes('startup')) {
    query.to = 'startups'
    // return redirect({ name: route.name, query: { tab: 'startups' } })
  }

  if (from && !from.name.includes('search')) {
    query.to = 'people'
    // return redirect({ name: route.name, query: { tab: 'people' } })
  }
}
