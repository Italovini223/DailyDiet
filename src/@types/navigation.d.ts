export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      details: { name: string, date: string}
      new: undefined
      afterCreate: {snackStatus: boolean}
      update: { name: string, date: string}
      statics: undefined
    }
  }
}