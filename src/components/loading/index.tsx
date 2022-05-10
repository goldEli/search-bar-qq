import React from 'react'
import "./index.css"

interface ILoadingProps {
	loading: boolean
	children?: React.ReactNode
}

const Loading: React.FC<ILoadingProps> = (props) => {
	if (!props.loading) {
		return <>{props.children}</>
	}
	return <div className='lds-dual-ring' />
}

export default Loading