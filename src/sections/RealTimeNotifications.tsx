function RealTimeNotifications() {
  return (
    <div className="p-6 py-[60px] lg:p-[120px] flex flex-col lg:flex-row justify-between items-center gap-y-[48px]">
      <div>
        <div className="lg:max-w-[589px] mb-6 lg:mb-8">
          <h3 className="mb-3 lg:mb-4 font-bold text-black text-[35px] leading-[42px] lg:text-[44px] lg:leading-[53px]">
            Stay updated with Real-Time Notifications
          </h3>
          <p className="text-sm lg:text-lg font-regular text-[#2D2F31]">
            Never miss a payroll deadline or invoice approval. Get instant
            notifications for salary payouts, invoice approvals, and compliance
            alerts to keep your operations running smoothly.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-[31px] text-[#2D2F31]">
          <div className="lg:max-w-[262px]">
            <div className="border-[0.57px] border-[#E8D0EF] rounded-lg p-[8.5px] mb-[10px] lg:mb-3 w-fit">
              <img src="/mailNotificationIcon.svg" alt="" />
            </div>
            <h4 className="font-bold text-base leading-5 lg:text-xl lg:leading-6 mb-[2px] lg:mb-[9px]">
              Instant Payroll Alerts
            </h4>
            <p className="text-[13px] leading-[21px] lg:text-base lg:leading-[26px]">
              Receive real-time updates when salaries are processed, ensuring
              employees get paid on time.
            </p>
          </div>
          <div className="lg:max-w-[262px]">
            <div className="border-[0.57px] border-[#E8D0EF] rounded-lg p-[8.5px] mb-[10px] lg:mb-3 w-fit">
              <img src="/starsIcon.svg" alt="" />
            </div>
            <h4 className="font-bold text-base leading-5 lg:text-xl lg:leading-6 mb-[2px] lg:mb-[9px]">
              Compliance & Invoice
            </h4>
            <p className="text-[13px] leading-[21px] lg:text-base lg:leading-[26px]">
              Stay on top of tax filings and invoice approvals with automated
              alerts to avoid delays.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/NotificationsBanner.svg"
        className="w-full lg:w-auto lg:h-[480px]"
        alt=""
      />
    </div>
  );
}

export default RealTimeNotifications;
