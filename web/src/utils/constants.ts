export function appName(screenName?: string) {
  if (screenName != null || screenName != undefined) {
    return `${screenName} - PocketBank`
  } else {
    return `PocketBank`
  }
}

export type OmitClassName<T> = Pick<T, Exclude<keyof T, 'className'>>
