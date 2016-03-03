/* @flow */
import React from 'react'
import { connect } from 'react-redux'
// import classes from './HomeView.scss'
import ItemAdder from '../../components/ItemAdder'

type Props = {
};
export class HomeView extends React.Component<void, Props, void> {

  render () {
    return (
      <div className='container text-center'>
        <ItemAdder />
      </div>
    )
  }
}
