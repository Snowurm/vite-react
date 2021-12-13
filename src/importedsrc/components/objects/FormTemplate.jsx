import React from "react";
const FormTemplate = () => {
    return (
        <>
            <div className="container-fluid">
                <div
                    className="card"
                    style={{
                        width: "28rem",
                        margin: "2rem",
                        padding: "2rem",
                        alignItems: "center",
                    }}
                >
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Card subtitle
                        </h6>
                        <form action="#">
                            <div className="row mb-1">
                                <div className="col">
                                    <label className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="First name"
                                        aria-label="First name"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last name"
                                        aria-label="Last name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Email"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-label">
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Phone"
                                        aria-label="Phone"
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <label className="form-label">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col">
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        type="text"
                                        name="message"
                                        className="form-control"
                                        placeholder="Message"
                                        aria-label="Message"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mt-2"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormTemplate;
