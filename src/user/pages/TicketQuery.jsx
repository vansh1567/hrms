// src/pages/TicketQuery.js
import React, { useState } from 'react';
import Header from '../components/UserHeader'; // Import Header component
import UserSideBar from '../components/UserSideBar'; // Import UserSideBar component
import { FaPlusCircle } from 'react-icons/fa';

const TicketQuery = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Sample data for last created tickets (This would typically come from an API)
    const tickets = [
        { date: '13/01', title: 'Testing', description: 'I am testing.', status: 'Open' },
        { date: '13/01', title: 'Testing', description: 'I am testing.', status: 'Close' },
        { date: '13/01', title: 'Testing', description: 'I am testing.', status: 'Pending' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would normally submit the ticket to your API
        console.log('Creating Ticket:', { title, description });
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <UserSideBar />

            <div className="flex-1">
                {/* Header */}
                <Header title="Ticket Query" avatarSrc="https://example.com/avatar.jpg" />

                <div className="container mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Ticket Query</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">Welcome back, Aditya</span>
                            <span className="text-sm text-gray-600">Tue, 00:00:00 AM</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-700">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="p-3 border rounded-md border-gray-300"
                                    placeholder="Write your title here..."
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm text-gray-700">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="p-3 border rounded-md border-gray-300"
                                    placeholder="Write your description here..."
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700"
                            >
                                <FaPlusCircle />
                                <span>Create Ticket</span>
                            </button>
                        </div>
                    </form>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-4">Last Created Tickets</h2>
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Title</th>
                                    <th className="py-2 px-4 text-left">Description</th>
                                    <th className="py-2 px-4 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((ticket, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="py-2 px-4">{ticket.date}</td>
                                        <td className="py-2 px-4">{ticket.title}</td>
                                        <td className="py-2 px-4">{ticket.description}</td>
                                        <td className="py-2 px-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${
                                                    ticket.status === 'Open'
                                                        ? 'bg-green-100 text-green-700'
                                                        : ticket.status === 'Close'
                                                        ? 'bg-red-100 text-red-700'
                                                        : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                            >
                                                {ticket.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketQuery;
