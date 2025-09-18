import type { FC } from "react";

export const Contact: FC = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return <div className="bg-grey m-0">
        <section className="px-4 py-8 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <form className="col col-12 col-md-6 col-lg-4 col-xl-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control my-1" placeholder="Name" aria-label="Name" />
                <input type="email" className="form-control my-1" placeholder="Email" aria-label="Email" />
                <input type="text" className="form-control my-1" placeholder="Message" aria-label="Message" />
                <button className="btn btn-secondary text-white w-100">SUBMIT</button>
            </form>
        </section>
    </div>
}