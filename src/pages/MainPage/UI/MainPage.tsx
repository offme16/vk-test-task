import GroupList from 'widgets/GroupList/GroupList';
import cls from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <GroupList />
        </div>
    )
}

export default MainPage;