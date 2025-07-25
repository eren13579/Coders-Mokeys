import { FormsType } from "@/types/froms";
import { Button } from "@/ui/design/button/button";
import { Input } from "@/ui/design/form/input";

interface Props {
    form: FormsType;
}

export const LoginForm = ({ form }: Props) => {

    const {
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,
    } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-5">
            <Input
                isLoading={isLoading}
                placeholder="johndoe@gmail.com"
                type="email"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner ce champ"
                id="email"
            />
            <Input
                isLoading={isLoading}
                placeholder="Mot de passe"
                type="password"
                register={register}
                errors={errors}
                errorMessage="Tu dois renseigner ce champ"
                id="password"
            />
            <Button loading={isLoading} type="submit" fullWith>
                Connexion
            </Button>
        </form>
    )
}