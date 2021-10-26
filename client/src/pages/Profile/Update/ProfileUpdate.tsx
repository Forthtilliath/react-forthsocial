import { useContext, useState } from 'react';
import AuthContext from '../../../components/AppContext/Auth.context';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { loadImage } from '../../../components/utils';

const Text = ({ userForm, name }: { userForm: IUser; name: InputProp }) => <>{userForm[name]}</>;
const Input = ({ userForm, type, toggleEditForm, update, onChange, name }: Input) => (
    <>
        {type === 'textarea' ? (
            <textarea style={{ width: '100%' }} name={name} value={userForm[name]} onChange={onChange} />
        ) : (
            <input type="text" name={name} value={userForm[name]} onChange={onChange} />
        )}
        <div className="profileUpdate--buttonsWrapper">
            <button className="profileUpdate--buttonsWrapper__cancel" onClick={() => toggleEditForm(name)}>
                Annuler
            </button>
            <button className="profileUpdate--buttonsWrapper__confirm" onClick={() => update(name)}>
                Enregistrer
            </button>
        </div>
    </>
);

const Bloc = ({ edit, ...props }: BoxInput) => (edit ? <Input {...props} /> : <Text {...props} />);

const ProfileUpdate = () => {
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;

    const [userForm, setUserForm] = useState(user);

    // Contient des booleans pour dire si le bloc est en mode édition ou pas
    const [editForm, setEditForm] = useState({
        coverPicture: false,
        currentCity: false,
        description: false,
        email: false,
        firstname: false,
        fromCity: false,
        lastname: false,
        profilePicture: false,
        username: false,
    });
    // Met à jour le mode édition
    const toggleEditForm = (propName: InputProp, value?: boolean) =>
        setEditForm({ ...editForm, [propName]: value ? value : !editForm[propName] });

    // Met à jour la valeur du form
    const handleChange = ({ target: { name, value } }: { target: { name: string; value: string } }) => {
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const update = (propName: InputProp) => {
        console.log('Contenu modifié');
        // dispatch sur userForm
        toggleEditForm(propName, false);
    };

    return (
        <div className="profileUpdate--container">
            <Sidebar />
            <div className="profileUpdate--right">
                <div className="profileUpdate--right__title">Modifier le profil</div>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">Photo de profil</div>
                        <div className="profileUpdate--titleWrapper__button">Modifier</div>
                    </div>
                    <div className="profileUpdate--imageWrapper">
                        <img
                            src={loadImage(user.profilePicture)}
                            alt="avatar"
                            className="profileUpdate--imageWrapper__avatar"
                        />
                    </div>
                </div>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">Photo de couverture</div>
                        <div className="profileUpdate--titleWrapper__button">Modifier</div>
                    </div>
                    <div className="profileUpdate--imageWrapper">
                        <img
                            src={loadImage(user.coverPicture)}
                            alt="cover"
                            className="profileUpdate--imageWrapper__cover"
                        />
                    </div>
                </div>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">A propos</div>
                        <div className="profileUpdate--titleWrapper__button" onClick={() => toggleEditForm('username')}>
                            {editForm.username ? 'Annuler' : 'Modifier'}
                        </div>
                    </div>
                    <div className="profileUpdate--blocsWrapper">
                        <Bloc
                            type="input"
                            name="username"
                            userForm={userForm}
                            toggleEditForm={toggleEditForm}
                            update={update}
                            edit={editForm.username}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">Description</div>
                        <div
                            className="profileUpdate--titleWrapper__button"
                            onClick={() => toggleEditForm('description')}
                        >
                            {editForm.description ? 'Annuler' : 'Modifier'}
                        </div>
                    </div>
                    <div className="profileUpdate--textWrapper">
                        <Bloc
                            type="textarea"
                            name="description"
                            userForm={userForm}
                            toggleEditForm={toggleEditForm}
                            update={update}
                            edit={editForm.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
