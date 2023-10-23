/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

export default function LanyardActivities() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.lanyard.rest/v1/users/433657598772772873");
      if (!response.ok) throw new Error(response.status);

      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();

    const fetchInterval = setInterval(fetchData, 5000);

    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div className="text-center p-4 animate-fade-in">
      {error && <p>{error}</p>}
      {userData && userData.data?.activities && (
        <ul className="mx-auto max-w-2xl">
          {userData.data.activities.map((activity, index) => (
            <li key={index} className="mb-4">
              <div className="border border-neutral-600 p-2 rounded-xl flex flex-col lg:flex-row items-center text-center lg:text-left">
                {activity.assets?.large_image && (
                  <img
                    src={
                      activity.assets.large_image.includes("raw.githubusercontent.com")
                        ? `https://raw.githubusercontent.com${activity.assets.large_image.split("raw.githubusercontent.com")[1]}`
                        : activity.assets.large_image.startsWith("spotify:")
                        ? `https://i.scdn.co/image/${activity.assets.large_image.split("spotify:")[1]}`
                        : null
                    }
                    alt={activity.assets.large_text}
                    className="w-16 h-16 lg:w-32 lg:h-32 lg:mr-4 rounded-xl mx-auto lg:mx-0"
                  />
                )}
                <div className="flex-auto">
                  <p className="text-lg font-semibold">{activity.name}</p>
                  <p className="text-gray-400">{activity.details}</p>
                  <p className="text-gray-400">{activity.state}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
