import React, {Dispatch, SetStateAction} from "react";
import classes from "./MyModal.module.css"

type MyModalType = {
    children: any
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

export const MyModal = ({ children, visible, setVisible }: MyModalType) => {

    const rootClasses = [classes.myModal]
    
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}