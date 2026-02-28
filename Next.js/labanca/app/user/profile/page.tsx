"use client";

import { useState } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text-strong)] outline-none focus:border-[color:var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/20";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "Baraka",
    lastName: "Otieno",
    username: "baraka_otieno",
    email: "baraka.otieno@gmail.com",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    bio: "SME owner managing payments and savings with Labanca.",
  });
  const [photo, setPhoto] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[color:var(--text-strong)]">
          Profile settings
        </h1>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          Update your personal information and profile picture.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[color:var(--line)] bg-[color:var(--card-soft)] text-lg font-semibold text-[color:var(--brand-deep)]">
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              "BO"
            )}
          </div>
          <label className="inline-flex cursor-pointer items-center rounded-lg border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2 text-sm font-medium text-[color:var(--text-strong)]">
            Change photo
            <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
          </label>
        </div>
      </section>

      <section className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-6">
        <form className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-[color:var(--text-muted)]">
            First name
            <input name="firstName" value={profile.firstName} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)]">
            Last name
            <input name="lastName" value={profile.lastName} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)] sm:col-span-2">
            Username
            <input name="username" value={profile.username} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)]">
            Email
            <input name="email" value={profile.email} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)]">
            Phone
            <input name="phone" value={profile.phone} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)] sm:col-span-2">
            Location
            <input name="location" value={profile.location} onChange={handleChange} className={inputClass} />
          </label>
          <label className="text-sm text-[color:var(--text-muted)] sm:col-span-2">
            Bio
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows={4}
              className={inputClass}
            />
          </label>

          <div className="sm:col-span-2">
            <button type="button" className="rounded-lg bg-[color:var(--brand)] px-5 py-2.5 text-sm font-semibold text-white">
              Save profile changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;
