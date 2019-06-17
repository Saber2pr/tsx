/*
 * @Author: saber2pr
 * @Date: 2019-06-15 22:50:11
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-17 17:34:41
 */
export const veryifyKey = (key: string) => {
  switch (key as keyof HTMLElement) {
    case 'className':
      return 'class'
    default:
      return key
  }
}
