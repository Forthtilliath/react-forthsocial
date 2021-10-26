import { useContext, useState } from 'react';
import AuthContext from '../../../components/AppContext/Auth.context';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { loadImage } from '../../../components/utils';

const Text = ({ value }: { value: string }) => <>{value}</>;
const Input = ({ value, type, onCancel, onConfirm, onChange, name }: Input) => (
    <>
        {type === 'textarea' ? (
            <textarea style={{ width: '100%' }} defaultValue={value} />
        ) : (
            <input type="text" name={name} value={value} onChange={onChange} />
        )}
        <div className="profileUpdate--buttonsWrapper">
            <button className="profileUpdate--buttonsWrapper__cancel" onClick={onCancel}>
                Annuler
            </button>
            <button className="profileUpdate--buttonsWrapper__confirm" onClick={onConfirm}>
                Enregistrer
            </button>
        </div>  
    </>
);

const Bloc = ({ edit, ...props }: BoxInput) =>
    edit ? <Input {...props} /> : <Text {...props} />;

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
        console.log(name, value);
        console.log(userForm);
        setUserForm({
            ...userForm,
            [name]: value,
        });
        console.log(userForm);
    };

    const update = (propName:InputProp) => {
            console.log('Contenu modifié');
        // dispatch sur userForm
        toggleEditForm(propName, false);
    }

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
                            edit={editForm.username}
                            value={userForm.username ?? ''}
                            onChange={handleChange}
                            onCancel={() => toggleEditForm('username', false)}
                            onConfirm={() => update('username')}
                        />
                    </div>
                </div>
                {/* <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">Description</div>
                        <div className="profileUpdate--titleWrapper__button" onClick={toggleDescription}>
                            {description ? 'Annuler' : 'Modifier'}
                        </div>
                    </div>
                    <div className="profileUpdate--textWrapper">
                        <Bloc
                            isEditing={description}
                            content={user.description ?? ''}
                            type="textarea"
                            onCancel={toggleDescription}
                            onConfirm={updateDescription}
                            onChange={handleChange}
                            formValues={userForm}
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProfileUpdate;
