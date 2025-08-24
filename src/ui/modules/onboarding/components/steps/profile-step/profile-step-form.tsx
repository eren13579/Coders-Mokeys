import { FormsType } from "@/types/froms";
import { Input } from "@/ui/design/form/input";
import { Textarea } from "@/ui/design/form/testarea";

interface Props {
    form: FormsType;
}

export const ProfileStepFrom = ({form}: Props) => {

    const { register, errors, isLoading } = form;

    return (
        <form className="w-full max-w-md space-y-5" action="">
            <Input
                label="Nom d'utilisateur"
                isLoading={isLoading}
                placeholder="John Doe"
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois remplire ce champ"
                id="displayName"
            />
            <Input
                label="Expertise"
                isLoading={isLoading}
                placeholder="Développeur front-end React freelance"
                type="text"
                register={register}
                errors={errors}
                errorMessage="Tu dois remplire ce champ"
                id="expertise"
            />
            <Textarea
                label="Biographie"
                isLoading={isLoading}
                placeholder="Indique une courte description de toi et de ton parcours"
                row={5}
                register={register}
                errors={errors}
                errorMessage="Tu dois remplire ce champ"
                id="biography"
                required={false}
            />
        </form>
    );
}