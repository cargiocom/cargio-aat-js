export enum Versions {
  '0.0.1' = '0.0.1',
}

export namespace Versions {
  export function isSupported(version: string): boolean {
    switch (version) {
      case Versions['0.0.1'].toString():
        return true
      case '':
        return false
      default:
        return false
    }
  }
}
