/*
 * @Author: saber2pr
 * @Date: 2019-06-16 15:42:55
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-16 15:51:27
 */
export const bind = (vm: Object, target: Object, map: Object) => {
  const proxy = Object.keys(map).reduce<PropertyDescriptorMap>(
    (receiver, key) => ({
      ...receiver,
      [key]: {
        set(v) {
          target[map[key]] = v
        },
        get() {
          return target[map[key]]
        }
      }
    }),
    {}
  )
  Object.defineProperties(vm, proxy)
}
