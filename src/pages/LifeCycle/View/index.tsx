/* eslint-disable no-console */
import React from 'react'

type LifeCyclePageViewProps = {
  title: string
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type LifeCyclePageViewState = {
  title: string
}

export default class Child extends React.PureComponent<
  LifeCyclePageViewProps,
  LifeCyclePageViewState
> {
  constructor(props: LifeCyclePageViewProps) {
    console.log('Child constructor props', props)

    // Здесь еще нет объекта this. Сначала надо вызвать super(props)
    // console.log('Child constructor this.props', this.props)
    super(props)

    console.log(
      'Child constructor this.props',
      this.props,
      this.props === props
    )

    const { title } = props

    this.state = {
      title,
    }

    // this.rerender = this.rerender.bind(this)
  }

  rerender = () => {
    console.log('rerender this', this)
    console.log('rerender this.props', this.props)

    this.forceUpdate()
  }

  /**
   * Обработчик текстового поля
   */
  onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.currentTarget.value

    /**
     * Устанавливаем новое значение в стейт
     */
    this.setState({
      title: newTitle,
    })
  }

  UNSAFE_componentWillReceiveProps = (
    props: LifeCyclePageViewProps,
    state: LifeCyclePageViewState
  ) => {
    console.log('Child UNSAFE_componentWillReceiveProps this.props', this.props)
    console.log('Child UNSAFE_componentWillReceiveProps props', props)
    console.log('Child UNSAFE_componentWillReceiveProps this.state', this.state)
    console.log('Child UNSAFE_componentWillReceiveProps state', state)

    if (props.title !== this.props.title) {
      this.setState({
        title: props.title,
      })
    }
  }

  componentDidUpdate = (
    props: LifeCyclePageViewProps,
    state: LifeCyclePageViewState
  ) => {
    console.log('Child componentDidUpdate this.props', this.props)
    console.log('Child componentDidUpdate props', props)
    console.log('Child componentDidUpdate this.state', this.state)
    console.log('Child componentDidUpdate state', state)
  }

  render() {
    console.log('Child render this', this)
    console.log('Child render this.props', this.props)
    console.log('Child render this.state', this.state)

    return (
      <>
        <button onClick={this.rerender}>Rerender</button>

        <div
          style={{
            margin: '15px 0',
          }}
        >
          <div>this.props.title: {this.props.title}</div>
          <div>this.state.title: {this.state.title}</div>
          <p>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />{' '}
            Смена титла в стейте дочернего компонента
          </p>
          <p>
            <input
              type="text"
              value={this.props.title}
              onChange={this.props.onChangeTitle}
            />{' '}
            Смена титла в пропсах дочернего компонента
          </p>
        </div>

        <div>{Math.random()}</div>
      </>
    )
  }
}
