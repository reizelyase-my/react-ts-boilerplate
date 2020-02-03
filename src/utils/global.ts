import { toast } from 'react-toastify'
import { NotificationType } from '../types/global'

const notify = (mode: NotificationType, message: string) => {
  toast(message, {
    type: mode
  })
}

export {
  notify
}