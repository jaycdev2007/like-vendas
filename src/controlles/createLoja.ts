import { ILoja } from "@/entities/loja";
import { verificarEmail } from "./verificarEmail";
import { encryptoPassword } from "./decryptoPassword";

export async function  CreateLoja({ name,email,password,idLogo  }:ILoja ) {
    const res = await verificarEmail(email)
    console.log(res)
}