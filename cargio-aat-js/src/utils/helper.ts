export class Helper {
  public static byteLength(str: string): number {
    const a = []
    for (let i = 0; i < str.length; i += 2) {
      a.push(str.substr(i, 2))
    }

    return a.length
  }

  public static validateHexStr(str: string): boolean {
    const re = /[0-9A-Fa-f]/g

    if (re.test(str)) {
      return true
    }
    return false
  }

  public static fromHex(str: string): Uint8Array {
    if (!str) {
      return new Uint8Array(0)
    }

    const data = []
    for (let index = 0, len = str.length; index < len; index += 2) {
      data.push(parseInt(str.substr(index, 2), 16))
    }

    return new Uint8Array(data)
  }
}
