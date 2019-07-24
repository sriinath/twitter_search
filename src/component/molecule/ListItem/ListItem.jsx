import * as React from 'react'
import { ListWrapper } from './styled.jsx'

const ListItem = props => {
    const {
        list,
        Item,
        commonProps
    } = props

    return <ListWrapper>
        {
            list.map((data, index) => (
                <Item
                    key={'list_' + index}
                    {...data}
                    {...commonProps}
                />
            ))
        }
    </ListWrapper>
}

export { ListItem }