import React from 'react';

const Comments = ({ comment }) => {
    return (
        <div className="bg-gray-50 p-4 border-l-4 border-green-500 mb-4">
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600">

                </div>
                <div>
                    <p className="font-semibold text-gray-800">{comment.name}</p>
                    <p className="text-sm text-gray-500">{comment.email}</p>
                </div>
            </div>
            <p className="mt-2 text-gray-700">{comment.body}</p>
        </div>
    );
};

export default Comments;
