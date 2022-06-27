/**
 *  Dispatch the action "nuxtClientInit" as soon as client starts.
 */
export default async (context) => {
  await context.store.dispatch('nuxtClientInit', context)
}
