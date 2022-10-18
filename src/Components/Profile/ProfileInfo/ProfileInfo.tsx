import React from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo = ({profile}: ProfilePropsType) => {
    if(!profile) {
        return <Preloader />
    }

    return <>
        {profile ?(
            <div>
                {/*<div>*/}
                {/*    <img src='https://abc-decor.com/img/gallery/4/thumbs/thumb_l_nus_10425.jpg' alt={'forest'}/>*/}
                {/*</div>*/}
                <div className={s.descriptionBlock}>
                     <img src={profile.photos.large} alt={"profile photo "}/>
                    <ProfileStatus />
                </div>

            </div>
        ): (
            <Preloader />
        )

        }
    </>

}
