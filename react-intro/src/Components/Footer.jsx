import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="flex justify-center footer sm:footer-horizontal bg-neutral text-neutral-content p-4">
                <aside className="items-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
