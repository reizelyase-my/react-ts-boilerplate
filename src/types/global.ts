interface State {
  title: string
}

interface HeaderProps {
  label: string
  fieldName: string
}

enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default'
}

enum ListType {
  TABLE = 'table'
}

export {
  HeaderProps,
  NotificationType,
  ListType,
  State
}