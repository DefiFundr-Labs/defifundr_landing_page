import realTimeNotificationsImage from "../../assets/images/Virtual Cards_2.webp";
import { MailNotificationIcon, StarsIcon } from "../../assets/svg/general";
import IconText from "./IconText";

function RealTimeNotifications() {
  return (
    <div className="container flex flex-col items-center justify-between py-15 xl:flex-row gap-y-12 md:gap-25">
      <div className="">
        <div className="mb-6 space-y-3 lg:mb-8 md:space-y-4">
          <h2 className="text-black  h2 inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Stay updated with Real-Time Notifications
          </h2>
          <p className="text-sm lg:text-lg font-regular text-[#626466] inview-once opacity-0 [--slidein-delay:200ms] inview:animate-slidein">
            Never miss a payroll deadline or invoice approval. Get instant
            notifications for salary payouts, invoice approvals, and compliance
            alerts to keep your operations running smoothly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row  text-[#2D2F31] gap-6  md:gap-32">
          <IconText
            title="Instant Payroll Alerts"
            description="Receive real-time updates when salaries are processed, ensuring employees get paid on time."
            img={<MailNotificationIcon />}
          />
          <IconText
            title="Compliance & Invoice"
            description="Stay on top of tax filings and invoice approvals with automated alerts to avoid delays."
            img={<StarsIcon />}
          />
        </div>
      </div>
      <img
        src={realTimeNotificationsImage}
        className="object-contain aspect-square"
        alt=""
      />
    </div>
  );
}

export default RealTimeNotifications;
