/*
 * @Author: saber2pr
 * @Date: 2019-06-18 16:45:57
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 16:46:56
 */
export class Store<T> {
  private listeners: Function[] = []
  private state: T

  public subscribe(listener: Function) {
    this.listeners.push(listener)
    return () => this.listeners.splice(this.listeners.indexOf(listener), 1)
  }

  public getState() {
    return this.state
  }

  public dispatch(state: T) {
    this.state = state
    this.listeners.forEach(l => l())
  }
}
