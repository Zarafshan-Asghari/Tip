import {cn} from '../../../utils/common'

export default function Card({className,children}){
    return(
        <div className={cn("rounded-5",className)}>{children}</div>
    )
}