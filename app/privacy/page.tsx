import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Reclaim OS",
  description:
    "Learn how Reclaim OS handles your data. Everything stays on your device by default.",
  alternates: {
    canonical: "https://reclaimos.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* ── Nav ── */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="flex items-center gap-4 text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo.png"
            alt="Reclaim OS logo"
            width={56}
            height={56}
            className="rounded-full"
          />
          Reclaim OS
        </Link>
      </nav>

      {/* ── Content ── */}
      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-lg text-white/60">
          <strong className="text-white/80">Effective date:</strong> March 10, 2026
          <span className="mx-2 text-white/20">|</span>
          <strong className="text-white/80">Last updated:</strong> March 10, 2026
        </p>

        <div className="prose-policy space-y-10 text-base leading-relaxed text-white/70">
          <p>
            Reclaim OS (&ldquo;Reclaim,&rdquo; &ldquo;the app,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; &ldquo;our&rdquo;) is a minimalist Android launcher built to
            help you spend less time on your phone. This policy describes what data we
            collect, why, and the choices you have. It applies wherever you use the app,
            regardless of how you downloaded it.
          </p>
          <p>
            For questions, contact us at{" "}
            <a
              href="mailto:reclaimOS.app@gmail.com"
              className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
            >
              reclaimOS.app@gmail.com
            </a>{" "}
            or visit{" "}
            <Link
              href="/"
              className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
            >
              reclaimos.com
            </Link>
            .
          </p>

          <hr className="border-white/10" />

          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              1. Data that stays on your device
            </h2>
            <p>
              By default, <strong className="text-white/90">everything stays on your phone</strong>.
              We do not send any data to any server unless you explicitly opt in to Collective
              Impact (Section 2).
            </p>
            <p className="mt-4">Data stored locally includes:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-red-500/50">
              <li>
                <strong className="text-white/90">Your settings</strong> — favorites, hidden apps,
                block rules, focus session preferences, home screen layout, theme, and swipe actions.
              </li>
              <li>
                <strong className="text-white/90">Focus session history</strong> — when sessions
                started and ended, their duration, which apps were blocked, and how each session
                concluded.
              </li>
              <li>
                <strong className="text-white/90">Usage statistics</strong> — screen time per app,
                app open counts, device pickups, and session lengths. This is read from
                Android&apos;s built-in UsageStatsManager. We cache daily summaries in a local
                database; raw per-second event data is not stored.
              </li>
              <li>
                <strong className="text-white/90">Block override history</strong> — timestamps of
                when you chose to override a block, used to enforce cooldown periods.
              </li>
            </ul>
            <p className="mt-4">
              All local data is stored in your app&apos;s private internal storage, inaccessible to
              other apps. It is explicitly excluded from Android cloud backup and device-to-device
              transfer.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              2. Collective Impact (opt-in only)
            </h2>
            <p>
              Reclaim offers an optional feature called{" "}
              <strong className="text-white/90">Collective Impact</strong> that counts the total
              hours reclaimed across all participating users.
            </p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">How you choose</h3>
            <p>During setup, a toggle is shown with this disclosure:</p>
            <blockquote className="mt-3 border-l-2 border-red-500/40 pl-5 italic text-white/50">
              &ldquo;Help us measure the collective impact of Reclaim. We anonymously track app
              usage with a random ID — no name, email, or account linked. Toggle off to keep
              everything on-device only.&rdquo;
            </blockquote>
            <p className="mt-4">
              You can change your choice at any time in <strong className="text-white/90">Settings
              &gt; About</strong>. If you opt out, no identifier is created, no data is sent, and
              your stats remain entirely on your device.
            </p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">
              What we send if you opt in
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/90">
                    <th className="pb-3 pr-4 font-semibold">Data</th>
                    <th className="pb-3 pr-4 font-semibold">Frequency</th>
                    <th className="pb-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-3 pr-4">A randomly generated ID (UUID)</td>
                    <td className="py-3 pr-4">Once</td>
                    <td className="py-3">Identifies your anonymous contribution</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Baseline usage — average daily screen time and open count per app (package
                      name only)
                    </td>
                    <td className="py-3 pr-4">Once</td>
                    <td className="py-3">Your &ldquo;before&rdquo; measurement</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Daily usage — total screen time and open count per app (package name only)
                    </td>
                    <td className="py-3 pr-4">Daily</td>
                    <td className="py-3">Your &ldquo;after&rdquo; progress</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">What we never send</h3>
            <p>
              Your name, email, phone number, Google account, device identifiers (IMEI, Android ID,
              advertising ID), location, contacts, messages, photos, browsing history, or any content
              displayed on your screen.
            </p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">Where it goes</h3>
            <p>
              Data is transmitted over HTTPS to infrastructure hosted by{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
              >
                Supabase
              </a>
              . Server-side authorization ensures only the holder of a given UUID can access or
              delete that UUID&apos;s records.
            </p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">
              Retention and deletion
            </h3>
            <p>
              You can delete your remote data at any time from{" "}
              <strong className="text-white/90">Settings &gt; About &gt; Delete all data</strong>.
              This removes your UUID, baseline, and daily records from our servers. Your contribution
              to the global counter is preserved in aggregate — it cannot be traced back to you after
              deletion. Locally, this action wipes your database and preferences completely.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 3 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">3. Permissions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/90">
                    <th className="pb-3 pr-4 font-semibold">Permission</th>
                    <th className="pb-3 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Usage Access</td>
                    <td className="py-3">
                      Read your app usage history for screen time stats and block enforcement.
                      Granted through Android Settings (not a runtime prompt).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Accessibility Service</td>
                    <td className="py-3">
                      Detect when a blocked app opens so Reclaim can show the block screen. This
                      service <strong className="text-white/90">cannot read your screen content,
                      text input, or notifications</strong> (canRetrieveWindowContent is disabled).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Query All Packages</td>
                    <td className="py-3">
                      Populate the app drawer with your installed apps. Required for launchers on
                      Android 11+.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Foreground Service</td>
                    <td className="py-3">
                      Keep focus session timers and block enforcement running reliably.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Internet</td>
                    <td className="py-3">
                      Collective Impact sync only (if opted in). No other network calls.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Vibrate</td>
                    <td className="py-3">Haptic feedback when a focus session ends.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Do Not Disturb</td>
                    <td className="py-3">
                      Optionally silence notifications during focus sessions.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Boot Completed</td>
                    <td className="py-3">
                      Restart the accessibility service after a device reboot.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Post Notifications</td>
                    <td className="py-3">
                      Display the foreground service notification (Android 13+).
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Set Wallpaper</td>
                    <td className="py-3">Apply a themed lock screen wallpaper.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-white/90">We do not request</strong> access to your location,
              contacts, calendar, camera, microphone, SMS, phone calls, files, or clipboard.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 4 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              4. Third-party services
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/90">
                    <th className="pb-3 pr-4 font-semibold">Service</th>
                    <th className="pb-3 pr-4 font-semibold">Role</th>
                    <th className="pb-3 font-semibold">Privacy policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Google Play Billing</td>
                    <td className="py-3 pr-4">
                      Processes Pro upgrade payments. We never see or store your payment details.
                    </td>
                    <td className="py-3">
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
                      >
                        policies.google.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white/90">Supabase</td>
                    <td className="py-3 pr-4">
                      Hosts the Collective Impact backend. Only receives data if you opt in.
                    </td>
                    <td className="py-3">
                      <a
                        href="https://supabase.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
                      >
                        supabase.com/privacy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We do not integrate any advertising networks, third-party analytics SDKs, or crash
              reporting services.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              5. Data security
            </h2>
            <ul className="list-disc space-y-2 pl-5 marker:text-red-500/50">
              <li>
                Local data resides in private app storage, sandboxed from other apps by Android.
              </li>
              <li>Local data is excluded from cloud backup and device-to-device transfer.</li>
              <li>All network traffic uses HTTPS with TLS encryption.</li>
              <li>
                Supabase authentication is fully anonymous — no email, password, or personal account
                is created.
              </li>
            </ul>
          </section>

          <hr className="border-white/10" />

          {/* Section 6 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              6. Children&apos;s privacy
            </h2>
            <p>
              Reclaim is not directed at children under 13 (or under 16 in the EEA). We do not
              knowingly collect personal information from children. If you believe a child has
              provided data to us, contact us and we will delete it promptly.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 7 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              7. Your rights and choices
            </h2>

            <h3 className="mb-3 mt-6 text-lg font-semibold text-white/90">All users</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/90">
                    <th className="pb-3 pr-4 font-semibold">Action</th>
                    <th className="pb-3 font-semibold">How</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  <tr>
                    <td className="py-3 pr-4">Opt out of Collective Impact</td>
                    <td className="py-3">Settings &gt; About &gt; toggle off analytics</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Delete all remote data</td>
                    <td className="py-3">Settings &gt; About &gt; Delete all data</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Delete all local data</td>
                    <td className="py-3">
                      Settings &gt; About &gt; Delete all data, or uninstall the app
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Revoke usage access</td>
                    <td className="py-3">
                      Android Settings &gt; Apps &gt; Special access &gt; Usage access
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Disable accessibility service</td>
                    <td className="py-3">
                      Android Settings &gt; Accessibility &gt; Reclaim OS
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Revoke any permission</td>
                    <td className="py-3">
                      Android Settings &gt; Apps &gt; Reclaim OS &gt; Permissions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">
              European Economic Area, UK, and Switzerland (GDPR)
            </h3>
            <p>
              If you are in the EEA, UK, or Switzerland, you have additional rights under the
              General Data Protection Regulation:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-red-500/50">
              <li>
                <strong className="text-white/90">Legal basis.</strong> We process Collective Impact
                data based on your <strong className="text-white/90">consent</strong> (opt-in
                toggle). Local-only processing is based on our legitimate interest in providing the
                app&apos;s core functionality.
              </li>
              <li>
                <strong className="text-white/90">Right of access.</strong> You may request a copy
                of any data we hold about you.
              </li>
              <li>
                <strong className="text-white/90">Right to rectification.</strong> You may ask us to
                correct inaccurate data.
              </li>
              <li>
                <strong className="text-white/90">Right to erasure.</strong> You may request
                deletion of your data at any time (Settings &gt; About &gt; Delete all data, or
                contact us).
              </li>
              <li>
                <strong className="text-white/90">Right to restrict processing.</strong> You may ask
                us to stop processing your data while a concern is resolved.
              </li>
              <li>
                <strong className="text-white/90">Right to data portability.</strong> You may
                request your data in a structured, machine-readable format.
              </li>
              <li>
                <strong className="text-white/90">Right to withdraw consent.</strong> You may
                withdraw consent at any time by toggling off analytics. Withdrawal does not affect
                data processed before withdrawal.
              </li>
              <li>
                <strong className="text-white/90">Right to lodge a complaint.</strong> You may file
                a complaint with your local data protection authority.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:reclaimOS.app@gmail.com"
                className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
              >
                reclaimOS.app@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
            <p className="mt-4">
              <strong className="text-white/90">Data transfers.</strong> Collective Impact data is
              processed on Supabase infrastructure. If this involves transfer outside the EEA, it is
              protected by standard contractual clauses or equivalent safeguards.
            </p>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-white/90">
              California (CCPA / CPRA)
            </h3>
            <p>
              If you are a California resident, the California Consumer Privacy Act grants you
              additional rights:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-red-500/50">
              <li>
                <strong className="text-white/90">Right to know.</strong> You may request the
                categories and specific pieces of personal information we have collected about you.
              </li>
              <li>
                <strong className="text-white/90">Right to delete.</strong> You may request deletion
                of your personal information.
              </li>
              <li>
                <strong className="text-white/90">Right to opt out of sale or sharing.</strong> We
                do <strong className="text-white/90">not</strong> sell or share your personal
                information with third parties for cross-context behavioral advertising.
              </li>
              <li>
                <strong className="text-white/90">Right to non-discrimination.</strong> We will not
                treat you differently for exercising your privacy rights.
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:reclaimOS.app@gmail.com"
                className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
              >
                reclaimOS.app@gmail.com
              </a>
              . We will verify your identity and respond within 45 days.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 8 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              8. Changes to this policy
            </h2>
            <p>
              If we make material changes, we will notify you through an in-app notice before the
              changes take effect. The &ldquo;Last updated&rdquo; date at the top reflects the most
              recent revision.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* Section 9 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">9. Contact</h2>
            <p>If you have questions about this policy or your data:</p>
            <p className="mt-3">
              <strong className="text-white/90">Email:</strong>{" "}
              <a
                href="mailto:reclaimOS.app@gmail.com"
                className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
              >
                reclaimOS.app@gmail.com
              </a>
            </p>
            <p className="mt-1">
              <strong className="text-white/90">Web:</strong>{" "}
              <Link
                href="/"
                className="text-red-400 underline decoration-red-400/30 underline-offset-2 transition-colors hover:text-red-300"
              >
                reclaimos.com
              </Link>
            </p>
          </section>
        </div>
      </article>

      {/* ── Footer ── */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/logo.png"
            alt="Reclaim OS logo"
            width={20}
            height={20}
            className="rounded-full"
          />
          Reclaim OS
        </Link>
        <span className="text-sm text-white/30">reclaimos.com</span>
      </footer>
    </main>
  );
}
