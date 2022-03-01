export const actions = {
  event (ctx, { action, category, label, value }) {
    const event = {}

    if (category) {
      event.event_category = category
    }

    if (label) {
      event.event_label = label
    }

    if (value) {
      event.value = value
    }

    this.$gtag('event', action, event)
  },
  page (ctx, path) {
    this.$gtag('page_view', path)
  }
}
