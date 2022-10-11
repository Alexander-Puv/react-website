import { DatePicker } from '@mantine/dates';
import RichTextEditor from '@mantine/rte';
import dayjs from 'dayjs';
import { useState } from 'react';
import { date } from '../../../utils/BlogData';
import { Button } from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import cl from './ProfileCenter.module.scss';

export const ProfileCenter = () => {
    const [name, setName] = useState(localStorage.getItem('username')),
        [pass, setPass] = useState(localStorage.getItem('password')),
        [born, setBorn] = useState(localStorage.getItem('born') ? localStorage.getItem('born') : undefined),
        [desc, setDesc] = useState(localStorage.getItem('desc') ? localStorage.getItem('desc') : ''),
        [disp, setDisp] = useState('none'),
        [isDisabled, setIsDisabled] = useState(true),

    dateOfBirth = () => {
        if (born) {
            const dOB = new Date(born);
            return `${dOB.getDate() < 10 ? `0${dOB.getDate()}` : dOB.getDate()}` +
                `.${dOB.getMonth() < 9 ? `0${dOB.getMonth() + 1}` : dOB.getMonth() + 1}.` +
                dOB.getFullYear();
        } else {
            return 'choose a date';
        }
    },

    changeDisabled = () => {
        setIsDisabled(false)
    },

    accept = () => {
        if(name !== localStorage.getItem('username')) localStorage.setItem('username', name);
        if(pass !== localStorage.getItem('password')) localStorage.setItem('password', pass);
        if(born !== localStorage.getItem('born')) localStorage.setItem('born', born);
        if(desc !== localStorage.getItem('desc')) localStorage.setItem('desc', desc);
        setIsDisabled(true)
    },

    decline = () => {
        if(name !== localStorage.getItem('username')) setName(localStorage.getItem('username'));
        if(pass !== localStorage.getItem('password')) setPass(localStorage.getItem('password'));
        if(born !== localStorage.getItem('born')) setBorn(localStorage.getItem('born'));
        if(desc !== localStorage.getItem('desc')) setDesc(localStorage.getItem('desc'));
        setIsDisabled(true)
    }

    return (
        <div className={cl.profileCenter}>
            <div className={cl.ind}>
                <div className={cl.info}>
                    <div className={cl.div}>
                        <span>Username:</span>
                        {isDisabled ?
                            <div>{name}</div>
                        :
                            <Input value={name} onChange={e => setName(e.target.value)}/>}
                    </div>
                    <div className={cl.mainDesc + ` ${cl.div}`}>
                        <span>Description:</span>
                        <RichTextEditor
                            className={cl.description}
                            style={isDisabled ? {cursor: 'default', background: 'transparent'} : {cursor: 'pointer', background: 'rgb(var(--rd-color))'}}
                            placeholder="The user didn't write anything about him"
                            onClick={() => isDisabled ? {} : setDisp('flex')}
                            readOnly value={desc && desc !== '<p><br></p>' ? desc : null}
                        />
                        <div className={cl.data} style={{display: disp}}>
                            <div className={cl.dataMain}>
                                <RichTextEditor value={desc} onChange={setDesc} 
                                    controls={[
                                        ['bold', 'strike', 'italic', 'underline'],
                                        ['h1', 'unorderedList', 'orderedList'],
                                        ['alignLeft', 'alignCenter', 'alignRight'],
                                        ['clean']
                                    ]}
                                />
                            </div>
                            <div className={cl.dataBack} onClick={() => setDisp('none')}></div>
                        </div>
                    </div>
                    {/* <div className={cl.mainDesc}>
                        
                    </div> */}
                    <div className={cl.div}>
                        <span>Registration date:</span>
                        <div>{date.getDate()}.{date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.{date.getFullYear()}</div>
                    </div>
                    <div className={cl.div}>
                        <span>Born:</span>
                        {isDisabled ?
                            <div>{dateOfBirth()}</div>
                        :
                            <DatePicker
                                disabled={isDisabled}
                                placeholder={dateOfBirth()}
                                maxDate={dayjs(date).endOf('day').toDate()}
                                value={born}
                                onChange={setBorn}
                            />
                        }
                    </div>
                    <div className={cl.div}>
                        <span>Followers:</span>
                        <div>0</div>
                    </div>
                    <div className={cl.div}>
                        <span>Comments:</span>
                        <div>{localStorage.getItem('comTotalAmount') ? localStorage.getItem('comTotalAmount') : '0'}</div>
                    </div>
                    {isDisabled ?
                        <></>
                    :
                        <div className={cl.div}>
                            <p>Password:</p>
                            <Input disabled={isDisabled} type='password' value={pass} onChange={e => setPass(e.target.value)}/>
                        </div>
                    }
                </div>
            </div>
            <div className={cl.data}>
                <div className={cl.change + ` ${isDisabled ? '' : cl.decline}`}>
                    {isDisabled ?
                        <Button value={'Change data'} onClick={changeDisabled}/>
                    :
                        <>
                            <Button value={'Decline'} onClick={decline}/>
                            <Button value={'Accept'} onClick={accept}/>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}