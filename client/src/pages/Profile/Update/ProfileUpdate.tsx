import { useContext, useState } from 'react';
import AuthContext from '../../../components/AppContext/Auth.context';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { loadImage } from '../../../components/utils';

// const Bloc = ({ edit, ...props }: BoxInput) => (edit ? <Input {...props} /> : <Text {...props} />);
const Bloc2 = ({ edit, toggleEditForm, name,label, ...props }: BoxInput) => (
    <div className="profileUpdate--itemWrapper">
        <div className="profileUpdate--titleWrapper">
            <h4 className="profileUpdate--titleWrapper__title">{label}</h4>
            <div className="profileUpdate--titleWrapper__button" onClick={() => toggleEditForm(name)}>
                {edit ? 'Annuler' : 'Modifier'}
            </div>
        </div>
        <div className="profileUpdate--textWrapper">
            {/* <Bloc
        type="input"
        name="username"
        label="Pseudo"
        userForm={userForm}
        toggleEditForm={toggleEditForm}
        update={update}
        onChange={handleChange}
            /> */}
            {edit ? <Input toggleEditForm={toggleEditForm} name={name} {...props} /> : <Text name={name} {...props} />}
        </div>
    </div>
);

const Text = ({ userForm, name }: TextProfil) => (
    <>
        {/* <label htmlFor={name}>{label}</label> */}
        <div id={name}>{userForm[name]}</div>
    </>
);

const Input = ({ userForm, type, toggleEditForm, update, onChange, name }: Input) => (
    <>
        {/* <label htmlFor={name}>{label}</label> */}
        {type === 'textarea' ? (
            <textarea style={{ width: '100%' }} name={name} id={name} value={userForm[name]} onChange={onChange} />
        ) : (
            <input type="text" name={name} id={name} value={userForm[name]} onChange={onChange} />
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
                <h2 className="profileUpdate--right__title">Modifier le profil</h2>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <h3 className="profileUpdate--titleWrapper__title">Photo de profil</h3>
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
                        <h3 className="profileUpdate--titleWrapper__title">Photo de couverture</h3>
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
                {/* Version 1 */}
                {/* <div className="profileUpdate--itemWrapper">
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
                            label="Pseudo"
                            userForm={userForm}
                            toggleEditForm={toggleEditForm}
                            update={update}
                            edit={editForm.username}
                            onChange={handleChange}
                        />
                    </div>
                </div> */}
                {/* Version 2 */}
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <h3 className="profileUpdate--titleWrapper__title">A propos</h3>
                    </div>
                </div>
                <Bloc2
                    type="input"
                    name="username"
                    label="Pseudo"
                    userForm={userForm}
                    toggleEditForm={toggleEditForm}
                    update={update}
                    edit={editForm.username}
                    onChange={handleChange}
                />
                <Bloc2
                    type="textarea"
                    name="description"
                    label="Description"
                    userForm={userForm}
                    toggleEditForm={toggleEditForm}
                    update={update}
                    edit={editForm.description}
                    onChange={handleChange}
                />
                {/* <div className="profileUpdate--itemWrapper">
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
                            label="Description"
                            userForm={userForm}
                            toggleEditForm={toggleEditForm}
                            update={update}
                            edit={editForm.description}
                            onChange={handleChange}
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProfileUpdate;
