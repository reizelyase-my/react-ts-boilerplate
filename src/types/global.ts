interface State {
  title: string
}

enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default'
}

export {
  NotificationType,
  State
}