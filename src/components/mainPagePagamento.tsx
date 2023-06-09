import { ButtonSecond } from "./buttonSecond";

export function MainPagePagamento() {
    return (
        <main className="p-6 md:w-[50vw] h-[60vh] flex flex-col justify-center">
            <h1 className="text-2xl pb-8 font-bold">Pagamento</h1>
            <p className="p-3 text-center pb-12">
                Faz um pagamento neste
                IBAN 9388539Ha008
                no valor de 2.500kz
                e envia o comprovativo neste
                número 944 757 305 
                via whatsapp em menos de
                30 minutos voçê pode voltar a fazer 
                login na sua conta e o serviço 
                vai voltar a funcinar perfeitamente
            </p>
            <div className="my-6">
             <ButtonSecond text="Volta para página de login" url="/login" sizeText="text-xs"  />
            </div>

            <p>Email: likevendas@gmail.com</p>
        </main>
    )
}