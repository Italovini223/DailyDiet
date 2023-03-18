export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      details: { name: string, date: string}
      new: undefined
      afterCreate: {snackStatus: boolean}
      update: undefined
      statics: undefined
    }
  }
}