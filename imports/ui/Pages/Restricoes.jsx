import React from "react";

export const Restricoes = () =>{
    return <div>
                <form>
                    <label> Emito Recibos Verdes:
                    <input type="checkbox" id="check_recibos_sim" value={"SIM"}/> Sim
                    <input type="checkbox" id="check_recibos_nao" value={"NAO"}/> Não
                    </label>
                    <br></br>
                    <br></br>
                    <label> Tenho transporte próprio:
                    <input type="checkbox" id="check_transporte_sim" value={"SIM"}/> Sim
                    <input type="checkbox" id="check_transporte_nao" value={"NAO"}/> Não
                    </label>
                    <br></br>
                    <br></br>
                    <div style={{width: '600px', height:'320px', overflow:'auto', marginLeft:'auto', marginRight:'auto'}}>
         <table style={{cellspacing: '0', cellpadding: '1', border: '1', width: '300'}} >
                        <thead>
                        <tr>
                            <th>Clube</th>
                            <th>Relação</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>ACADEMIA DE VOLEIBOL COLÉGIO ATLÂNTICO</td>
                            <td>
                                <select id="relacao1" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ACADEMIA MATEUS NOGUEIRA</td>
                            <td>
                                <select id="relacao2" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ACADEMIA VOLEIBOL PRAIA</td>
                            <td>
                                <select id="relacao3" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>APE LOBATO</td>
                            <td>
                                <select id="relacao4" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ASSOCIAÇÃO DE VOLEIBOL DA ESCOLA B. SEC. GAMA BARROS</td>
                            <td>
                                <select id="relacao5" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ASSOCIAÇÃO DESPORTIVA MARISTA</td>
                            <td>
                                <select id="relacao6" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CASCAIS VOLLEY4ALL</td>
                            <td>
                                <select id="relacao7" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CD ALVERCA VOLEI</td>
                            <td>
                                <select id="relacao8" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CENTRO DE VOLEIBOL DE LISBOA</td>
                            <td>
                                <select id="relacao9" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CF BELENENSES</td>
                            <td>
                                <select id="relacao10" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE COL GUADALUPE</td>
                            <td>
                                <select id="relacao11" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE DESPORTIVO COLÉGIO MINERVA</td>
                            <td>
                                <select id="relacao12" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE DESPORTIVO MARISTA DE CARCAVELOS</td>
                            <td>
                                <select id="relacao13" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE JUVENIL DE VOLEIBOL FILIPA DE LENCASTRE</td>
                            <td>
                                <select id="relacao14" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE NACIONAL DE GINÁSTICA</td>
                            <td>
                                <select id="relacao15" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE RECREATIVO PIEDENSE</td>
                            <td>
                                <select id="relacao15" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>CLUBE VOLEIBOL DE OEIRAS</td>
                            <td>
                                <select id="relacao16" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>COLÉGIO PEDRO ARRUPE</td>
                            <td>
                                <select id="relacao16" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>COLÉGIO SALESIANOS DE LISBOA OFICINA S. JOSÉ</td>
                            <td>
                                <select id="relacao17" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>COLÉGIO SÃO JOÃO DE BRITO</td>
                            <td>
                                <select id="relacao18" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>FAMÕES CLUBE ATLÉTICO</td>
                            <td>
                                <select id="relacao19" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>GD SESIMBRA</td>
                            <td>
                                <select id="relacao20" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>GINÁSIO CLUBE PORTUGUÊS</td>
                            <td>
                                <select id="relacao21" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>GRUPO DRAMÁTICO E SPORTIVO DE CASCAIS</td>
                            <td>
                                <select id="relacao22" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>GRUPO REC. CULTURAL DO BOM RETIRO</td>
                            <td>
                                <select id="relacao23" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>GRUPO UNIÃO RECREATIVO E DESPORTIVO "MTBA"</td>
                            <td>
                                <select id="relacao24" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>LOBATOS VOLLEY</td>
                            <td>
                                <select id="relacao25" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>LUSÓFONA VC</td>
                            <td>
                                <select id="relacao26" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>MADEIRA TORRES</td>
                            <td>
                                <select id="relacao27" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ODIVELAS SPORTS CLUB</td>
                            <td>
                                <select id="relacao28" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>ODIVELAS VOLEIBOL CLUBE</td>
                            <td>
                                <select id="relacao29" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>SALESIANOS DO ESTORIL</td>
                            <td>
                                <select id="relacao30" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>SINTRA VOLEI</td>
                            <td>
                                <select id="relacao31" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>SPORT LISBOA E BENFICA</td>
                            <td>
                                <select id="relacao31" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>SPORTING CLUBE DE TORRES</td>
                            <td>
                                <select id="relacao32" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>SPORTING CP</td>
                            <td>
                                <select id="relacao33" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>VOLEI CLUBE DE SETÚBAL 1990</td>
                            <td>
                                <select id="relacao34" name="clubes">
                                    <option value="Nenhuma">Nenhuma</option><option value="Treinador">Treinador</option>
                                    <option value="Atleta">Atleta</option>
                                    <option value="Dirigente">Dirigente</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <br></br>
                    <input type="submit" value="Submit" />
                    
                </form>
        </div>
}