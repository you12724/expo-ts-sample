import * as Expo from 'expo'
import React from 'react'

interface IoniconsProps {
  name: string
  size: number
  style: any
  color: any
}

declare module 'expo' {
  export namespace Icon {
    class Ionicons extends React.Component<IoniconsProps> {
      public static font: any

      public name: string
    }
  }
}
