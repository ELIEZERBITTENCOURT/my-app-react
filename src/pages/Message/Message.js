import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../styles/globalStyled';
import { Header } from "../../components/Header/Header";
import "./message-style.css";
import avatar1 from '../../assets/jason.jpg';
import avatar2 from '../../assets/michelle.jpg';
import avatar3 from '../../assets/ricahrd_taylor.jpg';
import avatar4 from '../../assets/jennifer.jpg';

export const Message = () => {
    const teamMembers = [
        {
            src: `${avatar1}`,
            name: 'Jason Alexander',
            alias: '@jason1',
            email: 'jason.alexandre@example.com',
            status: 'active',
            message: 'I am on it, will get back to you at the end of the week 😆.',
        },
        {
            src: `${avatar2}`,
            name: 'Michelle Claude',
            alias: '@michelle1',
            email: 'michelle.claude@example.com',
            status: 'active',
            message: 'I will prepare Instagram strategy, Liliya will take care about Facebook.',
        },
        {
            src: `${avatar3}`,
            name: 'Richard Taylor',
            email: 'richard.taylor@example.com',
            alias: '@ricahrd_taylor',
            status: 'inactive',
            message: 'I would love to get on that marketing campaign 😊. What are the next steps?',
        },

        {
            src: `${avatar4}`,
            name: 'Jennifer Floyd',
            email: 'jennifer.floyde@example.com',
            alias: '@jennifer',
            status: 'offline',
            message: 'What are the next steps?',
        },
    ];

    const itemsOnPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const start = (new URLSearchParams(window.location.search)).get('page') || 1;

    useEffect(() => {
        setCurrentPage(Number(start));
    }, [start]);

    const startIndex = (currentPage - 1) * itemsOnPage;
    const endIndex = currentPage * itemsOnPage;

    const displayedTeamMembers = teamMembers.slice(startIndex, endIndex);

    return (
        <>
            <GlobalStyle />
            <Header />
            <div className="table-widget">
                <table>
                    <caption>
                        Team Members
                        <span className="table-row-count">({teamMembers.length}) Members</span>
                    </caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Email address</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody id="team-member-rows">
                        {displayedTeamMembers.map((teamMember) => (
                            <tr key={teamMember.name}>
                                <td className="team-member-profile">
                                    <img src={teamMember.src} alt={teamMember.name} />
                                    <span className="profile-info">
                                        <span className="profile-info__name">{teamMember.name}</span>
                                        <span className="profile-info__alias">{teamMember.alias}</span>
                                    </span>
                                </td>
                                <td>
                                    <span className={`status status--${teamMember.status}`}>{teamMember.status}</span>
                                </td>
                                <td>{teamMember.email}</td>
                                <td>
                                    <span className="messages">
                                        <span key={teamMember.message} className={`message message--${teamMember.message}`}>
                                            {teamMember.message}
                                        </span>
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <ul className="pagination">
                                    {[...Array(Math.ceil(teamMembers.length / itemsOnPage)).keys()].map((pageNumber) => (
                                        <li key={pageNumber + 1}>
                                            <a
                                                href={`?page=${pageNumber + 1}`}
                                                className={pageNumber + 1 === currentPage ? 'active' : ''}
                                                title={`page ${pageNumber + 1}`}
                                            >
                                                {pageNumber + 1}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};
