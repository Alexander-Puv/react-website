import cl from './Warning.module.scss';

export const Warning = ({children, style}) => {
    return (
        <div className={cl.warning} style={style}>
            <span>{children}</span>
        </div>
    )
}