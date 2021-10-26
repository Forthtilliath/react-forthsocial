import { useContext, useState } from 'react';
import AuthContext from '../../../components/AppContext/Auth.context';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { loadImage } from '../../../components/utils';

const Text = ({ content }: { content: string }) => <>{content}</>;
const Input = ({ content, type, onCancel, onConfirm, onChange, formValues }: Input) => (
    <>
        {type === 'textarea' ? (
            <textarea style={{ width: '100%' }} defaultValue={content} />
        ) : (
            <input type="text" name="description" value={formValues.description} onChange={onChange} />
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

const Bloc = ({ isEditing, ...props }: BoxInput) => (isEditing ? <Input {...props} /> : <Text {...props} />);

const ProfileUpdate = () => {
    const { connexion } = useContext(AuthContext);
    const user = connexion.user!;

    const [userForm, setUserForm] = useState(user);

    const [description, setDescription] = useState(true);
    const toggleDescription = () => setDescription(!description);

    // prettier-ignore
    const arrInputs = ['username', 'email', 'firstname', 'lastname', 'currentCity', 'fromCity', 'description', 'profilePicture', 'coverPicture'];
    const initialEditForm = arrInputs.reduce((acc, input) => ({ ...acc, [input]: false }), {});

    const [editForm, setEditForm] = useState(initialEditForm);
    const setEditFormProp = (propName: string, value: boolean) => setEditForm({ ...editForm, [propName]: value });
    // const toggleEditForm = () => setEditForm(!description);

    const handleChange = ({ target: { name, value } }: { target: { name: string; value: string } }) => {
        setUserForm({
            ...userForm,
            [name]: value,
        });
    };

    const updateDescription = () => {
        console.log('Contenu modifié');
        setDescription(false);
        // setEditForm({ ...editForm, description: false });
        setEditFormProp('description', false);
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
                        <div className="profileUpdate--titleWrapper__button" onClick={toggleDescription}>
                            {description ? 'Annuler' : 'Modifier'}
                        </div>
                    </div>
                    <div className="profileUpdate--blocsWrapper">
                        <Bloc
                            isEditing={description}
                            // isEditing : description => setEditForm
                            // propName="name"
                            // editForm={editForm}
                            content={user.description ?? ''}
                            type="input"
                            onCancel={toggleDescription}
                            onConfirm={updateDescription}
                            onChange={handleChange}
                            formValues={userForm}
                        />
                    </div>
                </div>
                <div className="profileUpdate--itemWrapper">
                    <div className="profileUpdate--titleWrapper">
                        <div className="profileUpdate--titleWrapper__title">Description</div>
                        <div className="profileUpdate--titleWrapper__button" onClick={toggleDescription}>
                            {description ? 'Annuler' : 'Modifier'}
                        </div>
                    </div>
                    <div className="profileUpdate--textWrapper">
                        {/* <Bloc
                            isEditing={description}
                            content={user.description ?? ''}
                            type="textarea"
                            onCancel={toggleDescription}
                            onConfirm={updateDescription}
                            onChange={handleChange}
                            formValues={userForm}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
