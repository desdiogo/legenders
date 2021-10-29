import { Notify } from 'quasar'

// postion = 'top-left' | 'top' | 'top-right' |  'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'

const createNotify = (type, message, position = 'top') => {
  Notify.create({
    textColor: 'white',
    message,
    type,
    position,
    actions: [
      { icon: 'close', color: 'white', attrs: { 'aria-label': 'Dismiss' } }
    ],
    timeout: 5000
  })
}

export const notify = {
  success: (message, position) => createNotify('positive', message, position),
  error: (message, position) => createNotify('negative', message, position),
  warning: (message, position) => createNotify('warning', message, position),
  info: (message, position) => createNotify('info', message, position),
}

