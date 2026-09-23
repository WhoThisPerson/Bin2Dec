import { useState } from "react";

function Main() {

    const [input, setInput] = useState("");
    const [decimal, setDecimal] = useState("");

    const binaryToDecimal = (binary: string): number => {
        let digits = binary.length;
        let res = 0;
        let digit = "";

        for (let i = digits - 1; i >= 0; i--) {

            digit = binary[i];

            //Ensure only 0s and 1s are entered
            if (digit !== "0" && digit !== "1") {
                alert("Please enter either 0 or 1");
                setInput("");
                setDecimal("");
                break;
            }

            if (digit === "1") {
                res += Math.pow(2, digits - 1 - i);
            }
        }

        return res;
    }

    return (
        <section>

            <table className="converter-table">
                <thead>
                    <tr>
                        <th>Binary</th>
                        <th>Decimal</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => {
                                const value = e.target.value;
                                setInput(value);
                                setDecimal(binaryToDecimal(value).toString());
                            }}
                            />
                        </td>

                        <td>
                            <input 
                            type="text" 
                            value={decimal} 
                            readOnly />
                        </td>
                    </tr>
                </tbody>

            </table>
        </section>
    );
}

export default Main;
