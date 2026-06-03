"use client";

import { useEffect, useState } from "react";

const roles = [
  "Analyst",
  "AI Developer",
  "Data Scientist",
  "Founder",
  "Polymath",
  "Linguist",
  "ML Engineer",
];

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789#@$";

const typingSpeed = 70;
const deletingSpeed = 35;
const fullPause = 1200;
const nextPause = 300;

export function TypingIdentity({ accentClassName }: { accentClassName: string }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrambleChar, setScrambleChar] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleMotionPreference() {
      setReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) setDisplayedRole(roles[0]);
    }

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);
    return () => mediaQuery.removeEventListener("change", handleMotionPreference);
  }, []);

  // Scramble character cycles ahead of the cursor while typing
  useEffect(() => {
    if (reducedMotion || deleting) {
      setScrambleChar("");
      return;
    }
    const currentRole = roles[roleIndex];
    if (displayedRole === currentRole) {
      setScrambleChar("");
      return;
    }
    const id = setInterval(() => {
      setScrambleChar(SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]);
    }, 55);
    return () => clearInterval(id);
  }, [reducedMotion, deleting, displayedRole, roleIndex]);

  useEffect(() => {
    if (reducedMotion) return;

    const currentRole = roles[roleIndex];
    const roleComplete = displayedRole === currentRole;
    const roleDeleted = displayedRole.length === 0;
    let delay = deleting ? deletingSpeed : typingSpeed;

    if (!deleting && roleComplete) delay = fullPause;
    if (deleting && roleDeleted) delay = nextPause;

    const timeout = window.setTimeout(() => {
      if (!deleting && roleComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && roleDeleted) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      if (deleting) {
        setDisplayedRole((role) => role.slice(0, -1));
      } else {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, displayedRole, reducedMotion, roleIndex]);

  return (
    <p className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
      <span>I am a </span>
      <span className={`bg-gradient-to-r bg-clip-text text-transparent ${accentClassName}`}>
        {displayedRole}
        {!reducedMotion && !deleting && scrambleChar && (
          <span className="opacity-30">{scrambleChar}</span>
        )}
      </span>
      {!reducedMotion && (
        <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 animate-pulse rounded-full bg-[var(--accent)] md:h-8" />
      )}
    </p>
  );
}
